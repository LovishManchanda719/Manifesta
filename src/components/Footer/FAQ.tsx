import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Ensure correct path for the accordion component.

export function AccordionDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      {/* Page Heading */}
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h1> {/* Slightly reduced heading size */}
        <p className="text-sm text-gray-600 mt-4">
          Find answers to common questions about using Manifesta.
        </p> {/* Slightly reduced paragraph size */}
      </header>

      {/* FAQ Accordion */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">What is Manifesta?</AccordionTrigger> {/* Reduced trigger size */}
          <AccordionContent className="text-sm text-gray-700">
            Manifesta is a platform where college societies can list and promote their events, making it easy for everyone to discover and attend.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">How can I list my event?</AccordionTrigger>
          <AccordionContent className="text-sm text-gray-700">
            To list an event, sign in as a society administrator and fill in the event details in the 'Create Event' section. Once submitted, your event will be listed for students to discover.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">Is there a fee for listing events?</AccordionTrigger>
          <AccordionContent className="text-sm text-gray-700">
            No, Manifesta allows college societies to list their events for free, ensuring maximum exposure for campus activities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg">How do event recommendations work?</AccordionTrigger>
          <AccordionContent className="text-sm text-gray-700">
            Event recommendations are tailored based on user preferences, previous interactions, and event popularity. This ensures users receive relevant suggestions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg">Who can view the listed events?</AccordionTrigger>
          <AccordionContent className="text-sm text-gray-700">
            Anyone with access to the platform can browse and explore events listed by societies, ensuring maximum reach and participation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg">Can I cancel an event once listed?</AccordionTrigger>
          <AccordionContent className="text-sm text-gray-700">
            Yes, as an administrator, you can cancel or modify event details anytime. Canceled events will be removed from the public view.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionDemo;
