'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'
import { useCoverImage } from '@/hooks/use-cover-image'
import { useEdgeStore } from '@/lib/edgestore'
import { SingleImageDropzone } from '../single-image-dropzone'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useParams } from 'next/navigation'
import { Id } from '@/convex/_generated/dataModel'

export const CoverImageModal = () => {
  const coverImage = useCoverImage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [file, setFile] = useState<File>()
  const params = useParams()
  const { edgestore } = useEdgeStore()

  const update = useMutation(api.documents.update)

  const onClose = () => {
    setFile(undefined)
    setIsSubmitting(false)
    coverImage.onClose()
  }

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true)
      setFile(file)

      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImage.url
        }
      })

      await update({ id: params.documentId as Id<'documents'>, coverImage: res.url })
      onClose()
    }
  }

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader className='border-b pb-3'>
          <h2 className='text-center text-lg font-semibold'>Cover image</h2>
        </DialogHeader>

        <div className='flex items-center justify-between'>
          <SingleImageDropzone
            className='w-full outline-none '
            disabled={isSubmitting}
            value={file}
            onChange={onChange}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
