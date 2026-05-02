"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import type { ReactNode } from "react";

export interface AccordionItem {
  value: string;
  title: string;
  content: ReactNode;
}

export function Accordion({ items, defaultValue }: { items: AccordionItem[]; defaultValue?: string }) {
  return (
    <RadixAccordion.Root type="single" collapsible defaultValue={defaultValue} className="border-t border-ink/15">
      {items.map((item) => (
        <RadixAccordion.Item key={item.value} value={item.value} className="border-b border-ink/15">
          <RadixAccordion.Header>
            <RadixAccordion.Trigger className="group w-full flex items-center justify-between py-5 text-left text-[0.72rem] tracking-[0.2em] uppercase">
              <span>{item.title}</span>
              <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
              <Minus className="h-4 w-4 hidden group-data-[state=open]:block" />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="overflow-hidden text-sm text-ink/80 leading-relaxed data-[state=open]:animate-fade-up">
            <div className="pb-6 pr-4">{item.content}</div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
