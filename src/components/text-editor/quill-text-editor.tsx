import React, {forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef,} from "react";
import Quill from "quill";
import styles from '../../styles/QuillTextEditor.module.css';
import Toolbar from "quill/modules/toolbar";

interface QuillTextEditorProps {
    readOnly?: boolean;
    defaultValue?: any;
    onTextChange?: (...args: any[]) => void;
    onSelectionChange?: (...args: any[]) => void;
    className?: string;
    editorToolbarClassName?: string;
}

const QuillTextEditor = forwardRef<Quill | null, QuillTextEditorProps>(
    ({readOnly, defaultValue, onTextChange, onSelectionChange, className}, ref) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const quillRef = useRef<Quill | null>(null);
        const defaultValueRef = useRef(defaultValue);
        const onTextChangeRef = useRef(onTextChange);
        const onSelectionChangeRef = useRef(onSelectionChange);

        useImperativeHandle(ref, () => quillRef.current as Quill, []);

        useLayoutEffect(() => {
            onTextChangeRef.current = onTextChange;
            onSelectionChangeRef.current = onSelectionChange;
        }, [onTextChange, onSelectionChange]);

        useEffect(() => {
            const container = containerRef.current;
            if (!container) return;

            const editorContainer = container.appendChild(
                container.ownerDocument.createElement("div")
            )

            const quill = new Quill(editorContainer, {
                theme: "snow",
                modules: {
                    toolbar: {
                        container: [
                            // [{header: [1, 2, false]}],
                            ["bold", "italic", "underline"],
                            // ["image", "code-block"],
                            [{list: "ordered"}, {list: "bullet"}],
                            ["clean"],
                            [{name: "aiButton"}],
                        ],
                        handlers: {
                            aiButton: () => {
                                console.log("Generate with AI button clicked");
                            },
                        },
                    },
                },
            });
            // "Generate with AI" button to the toolbar
            const toolbar = quill.getModule("toolbar") as Toolbar;
            const aiButtonContainer = document.createElement("span");
            aiButtonContainer.classList.add(styles.ql_ai_button_container);
            const buttonHTML = ` <button type="button" class="${styles.ql_ai_button}">
      <span class="${styles.fold}"></span>
      <div class="${styles.points_wrapper}">
        <i class="${styles.point}"></i>
        <i class="${styles.point}"></i>
        <i class="${styles.point}"></i>
        <i class="${styles.point}"></i>
        <i class="${styles.point}"></i>
        <i class="${styles.point}"></i>
        <i class="${styles.point}"></i>
        <i class="${styles.point}"></i>
        <i class="${styles.point}"></i>
        <i class="${styles.point}"></i>
      </div>
      <span class="${styles.inner}">
        <svg
          class="${styles.icon}"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
        >
          <polyline
            points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"
          ></polyline>
        </svg>
        AI
      </span>
    </button>
  `;
            const aiButton = document.createElement("span");
            aiButton.innerHTML = buttonHTML;
            aiButton.addEventListener("click", () => {
                console.log("Generate with AI button clicked");
            });

            aiButtonContainer.appendChild(aiButton);
            toolbar.container!.appendChild(aiButtonContainer);
            quillRef.current = quill;

            if (defaultValueRef.current) {
                quill.setContents(defaultValueRef.current);
            }

            quill.on(Quill.events.TEXT_CHANGE, (...args) => {
                onTextChangeRef.current?.(...args);
            });

            quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
                onSelectionChangeRef.current?.(...args);
            });

            return () => {
                quillRef.current = null;
                container.innerHTML = "";
            };
        }, []);

        useEffect(() => {
            if (quillRef.current) {
                quillRef.current.enable(!readOnly);
            }
        }, [readOnly]);

        return <div className={className} ref={containerRef}></div>;
    }
);

QuillTextEditor.displayName = "Editor";

export default QuillTextEditor;
