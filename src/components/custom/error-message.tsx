export default function ErrorMessage({ errors }: { errors?: string[] }) {
  return (
    <>
      {errors &&
        errors.map((error) => (
          <p className="text-sm font-medium text-destructive">{error}</p>
        ))}
    </>
  )
}
