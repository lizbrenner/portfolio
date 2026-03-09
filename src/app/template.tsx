/**
 * Template re-mounts on every client navigation, so page content gets a fresh
 * mount and doesn’t disappear when switching routes.
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-0 w-full">{children}</div>;
}
