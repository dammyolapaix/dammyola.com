'use client'

import { Loader2 } from 'lucide-react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({ cta }: { cta: string }) {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type="submit">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {cta}
        </>
      ) : (
        cta
      )}
    </Button>
  )
}
