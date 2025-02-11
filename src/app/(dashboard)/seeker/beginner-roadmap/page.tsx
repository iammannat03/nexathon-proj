'use client'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

const Page = () => {
  return (
    <div className='m-10'>
        <div className="text-3xl font-bold pb-5">Create a Personalized Roadmap</div>
        <Dialog>
        <DialogTrigger className='border border-gray-500 bg-gray-100 hover:bg-gray-200 transition-all py-2 px-4 rounded-md'>Choose a Domain you're interested in</DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Domains to choose from</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default Page