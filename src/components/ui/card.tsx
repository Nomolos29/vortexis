import * as React from "react"

import { cn } from "@/lib/utils"

const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

export default Card