export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <div>Hello Sigin page</div>
        <div>
          {children}
        </div>
      </div>
    );
  }