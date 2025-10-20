export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-10 border-t border-gray-300 text-gray-500 text-lg font-medium">
      &copy; {year} All rights reserved
    </footer>
  );
};
