export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Isaac. All rights reserved.</p>
          <p>Built with passion and too much coffee.</p>
        </div>
      </div>
    </footer>
  );
};
