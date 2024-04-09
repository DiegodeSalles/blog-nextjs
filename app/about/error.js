"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const router = useRouter();

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        className="rounded bg-red-600 transition hover:bg-red-400 p-2 mt-1"
        onClick={() =>
          startTransition(() => {
            router.refresh();
            reset();
          })
        }
      >
        Try again
      </button>
    </div>
  );
}
