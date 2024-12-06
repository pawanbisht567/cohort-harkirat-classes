export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <div className="border-b p-1 text-center">
            20% Off for the next few days
        </div>
        <div>
          {children}
        </div>
      </div>
    );
  }