export default function ImagePreview({ file, onRemove }) {
  if (!file) return null;

  return (
    <div className="relative w-44">

      <img
        src={URL.createObjectURL(file)}
        alt="preview"
        className="rounded-3xl object-cover"
      />

      <button
        onClick={onRemove}
        className="absolute top-2 right-2 bg-red-500 w-8 h-8 rounded-full"
      >
        ✕

      </button>

    </div>
  );
}