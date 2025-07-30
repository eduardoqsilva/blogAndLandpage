'use client'

import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

type PostShareProps = {
  url: string
  title: string
  description: string
}

export function PostShare({ description, title, url }: PostShareProps) {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  });

  return (
    <aside className="space-y-6">
      <div className="rounded-lg bg-gray-700">
        <h2 className="hidden mb-4 text-heading-xs text-gray-100 md:block">
          Compartilhar
        </h2>
        <div className="flex justify-between md:flex-col gap-2">
          {shareButtons.map((provider) => (
            <Button
              variant={"outline"}
              className="w-fit md:w-full justify-start gap-2"
              key={provider.provider}
              onClick={() => provider.action()}
            >
              {provider.icon}
              <span className="sr-only md:not-sr-only">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}