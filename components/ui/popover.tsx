"use client";

import {
  Root as Popover,
  Trigger as PopoverTrigger,
  Content as PopoverContent,
  Portal as PopoverPortal,
  Anchor as PopoverAnchor,
} from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

function MyPopover({ ...props }: React.ComponentProps<typeof Popover>) {
  return <Popover data-slot="popover" {...props} />;
}

function MyPopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverTrigger>) {
  return <PopoverTrigger data-slot="popover-trigger" {...props} />;
}

function MyPopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverContent>) {
  return (
    <PopoverPortal>
      <PopoverContent
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPortal>
  );
}

function MyPopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverAnchor>) {
  return <PopoverAnchor data-slot="popover-anchor" {...props} />;
}

export { MyPopover, MyPopoverTrigger, MyPopoverContent, MyPopoverAnchor };
