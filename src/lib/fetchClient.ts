export const fetchClient = async (
  url: string,
  options: RequestInit = {},
): Promise<any> => {
  const accessToken = localStorage.getItem("accessToken");

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      ...options.headers,
    },
  });

  if (res.status === 401) {
    // Attempt to refresh the token
    const refreshResponse = await fetch(
      "/api/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      },
    );

    if (refreshResponse.ok) {
      const { accessToken: newAccessToken } =
        await refreshResponse.json();
      localStorage.setItem("accessToken", newAccessToken);

      // Retry the original request with the new token
      return fetchClient(url, options);
    } else {
      // Refresh token failed; logout the user
      localStorage.removeItem("accessToken");
      throw new Error(
        "Session expired. Please log in again.",
      );
    }
  }

  if (!res.ok) {
    const error = await res.json();
    throw new Error(
      error.message || "Something went wrong.",
    );
  }
  return res.json();
};
