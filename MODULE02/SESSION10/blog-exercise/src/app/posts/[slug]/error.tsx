"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <div> Error Happened : {error.message}</div>
    </div>
  );
}
