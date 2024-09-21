export default function ErrorMessage({ errors }: { errors?: string[] }) {
  return (
    <>
      {errors &&
        errors.map((error) => (
          <p key={error} className="text-sm font-medium text-destructive">
            {error}
          </p>
        ))}
    </>
  )
}
