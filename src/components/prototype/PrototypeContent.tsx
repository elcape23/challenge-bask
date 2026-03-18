"use client";

import {
  LayoutiPhone,
  TopBar,
  SenaLogo,
  CardContent,
  RelatedCardContent,
  InfoCardContent,
  ButtonContainer,
  ListItem,
  Menu,
  Footer,
} from "@/components/prototype/globals";

/**
 * Prototype audit — all global components for review.
 */
export default function PrototypeContent() {
  return (
    <div className="min-h-full bg-background-default-default flex flex-col">
      <header className="flex items-center justify-between px-5 pt-12 pb-4 border-b border-border-neutral-default bg-background-surface-neutral-default">
        <h1 className="text-heading-06 font-medium text-text-neutral-default">
          Prototype audit
        </h1>
      </header>

      <main className="flex-1 p-5 space-y-12">
        {/* LayoutiPhone */}
        <section>
          <h2 className="text-heading-06 font-medium text-text-neutral-default mb-3">
            LayoutiPhone
          </h2>
          <div className="border border-border-neutral-default rounded-lg overflow-hidden">
            <LayoutiPhone>
              <div className="p-5 text-body-02 text-text-neutral-secondary">
                Content slot
              </div>
            </LayoutiPhone>
          </div>
        </section>

        {/* TopBar */}
        <section>
          <h2 className="text-heading-06 font-medium text-text-neutral-default mb-3">
            TopBar
          </h2>
          <div className="space-y-3">
            <div className="border border-border-neutral-default rounded-lg p-3 bg-background-default-default">
              <p className="text-body-03 text-text-neutral-secondary mb-2">
                color=primary, state=default
              </p>
              <TopBar />
            </div>
            <div className="border border-border-neutral-default rounded-lg p-3 bg-background-default-default">
              <p className="text-body-03 text-text-neutral-secondary mb-2">
                color=primary, state=default, showButton=true
              </p>
              <TopBar showButton showIconButton />
            </div>
            <div className="border border-border-neutral-default rounded-lg p-3 bg-background-default-default">
              <p className="text-body-03 text-text-neutral-secondary mb-2">
                color=invert, state=default
              </p>
              <TopBar color="invert" />
            </div>
            <div className="border border-border-neutral-default rounded-lg p-3 bg-background-default-default">
              <p className="text-body-03 text-text-neutral-secondary mb-2">
                color=invert, state=background, showSwitch=true, onClose
              </p>
              <div className="rounded-xl bg-neutral-700 p-3">
                <TopBar
                  color="invert"
                  state="background"
                  showSwitch
                  onClose={() => {}}
                />
              </div>
            </div>
            <div className="border border-border-neutral-default rounded-lg p-3 bg-background-default-default">
              <p className="text-body-03 text-text-neutral-secondary mb-2">
                color=primary, state=loading
              </p>
              <TopBar state="loading" />
            </div>
          </div>
        </section>

        {/* SenaLogo */}
        <section>
          <h2 className="text-heading-06 font-medium text-text-neutral-default mb-3">
            SenaLogo
          </h2>
          <div className="flex gap-6 flex-wrap">
            <div className="p-3 bg-background-surface-neutral-default rounded-lg">
              <SenaLogo />
            </div>
            <div className="p-3 bg-neutral-900 rounded-lg">
              <SenaLogo variant="invert" />
            </div>
            <SenaLogo size="md" />
          </div>
        </section>

        {/* CardContent */}
        <section>
          <h2 className="text-heading-06 font-medium text-text-neutral-default mb-3">
            CardContent
          </h2>
          <div className="border border-dashed border-border-primary-default rounded-[20px] p-5 bg-background-default-default">
            <div className="mx-auto w-full max-w-[335.209px]">
              <CardContent
                type="add-on"
                heading="Heading"
                description="Description"
                finalPrice="00.00"
                originalPrice="00.00"
              />
              <RelatedCardContent
                className="mt-6"
                heading="Heading"
                description="Description"
                finalPrice="00.00"
                originalPrice="00.00"
                showBadge
                isOffer
              />
              <CardContent
                type="order-confirmation"
                className="mt-1"
                heading="Heading"
                finalPrice="0.00"
                quantity={0}
              />
              <div className="mt-1">
                <CardContent
                  type="menu"
                  heading="Heading"
                  description="Description"
                />
              </div>
              <CardContent
                type="cart"
                className="mt-1"
                heading="Heading"
                description="Description"
                finalPrice="14.99"
                quantity={1}
              />
            </div>
          </div>
        </section>

        {/* InfoCardContent */}
        <section>
          <h2 className="text-heading-06 font-medium text-text-neutral-default mb-3">
            InfoCardContent
          </h2>
          <div className="p-4 bg-neutral-900 rounded-lg w-fit">
            <InfoCardContent
              heading="Health tracking"
              description="Monitor your progress with our integrated dashboard."
            />
          </div>
        </section>

        {/* ButtonContainer */}
        <section>
          <h2 className="text-heading-06 font-medium text-text-neutral-default mb-3">
            ButtonContainer
          </h2>
          <div className="border border-border-neutral-default rounded-lg overflow-hidden">
            <ButtonContainer
              primaryLabel="Add To Cart"
              secondaryLabel="Learn More"
            />
          </div>
        </section>

        {/* ListItem */}
        <section>
          <h2 className="text-heading-06 font-medium text-text-neutral-default mb-3">
            ListItem
          </h2>
          <div className="border border-border-neutral-default rounded-lg divide-y divide-border-neutral-default">
            <ListItem
              subheading="1 of 3"
              heading="Create Account"
              state="default"
            >
              <p className="text-body-02 text-text-neutral-secondary pt-2">
                Slot content
              </p>
            </ListItem>
            <ListItem
              subheading="2 of 3"
              heading="Shipping Information"
              state="default"
            />
            <ListItem
              subheading="3 of 3"
              heading="Payment"
              state="disabled"
            />
          </div>
        </section>

        {/* Menu */}
        <section>
          <h2 className="text-heading-06 font-medium text-text-neutral-default mb-3">
            Menu
          </h2>
          <div className="border border-border-neutral-default rounded-lg overflow-hidden bg-neutral-900">
            <Menu />
          </div>
        </section>

        {/* Footer */}
        <section>
          <h2 className="text-heading-06 font-medium text-text-neutral-default mb-3">
            Footer
          </h2>
          <div className="border border-border-neutral-default rounded-lg overflow-hidden">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
