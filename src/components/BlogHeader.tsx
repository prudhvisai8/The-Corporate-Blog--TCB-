import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { categories } from "@/data/mockPosts";
import { Menu, X, LogOut, Search, UserCircle } from "lucide-react";
import { useState } from "react";
import SearchDialog from "./SearchDialog";
import DarkModeToggle from "./DarkModeToggle";

const BlogHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navCategories = categories.slice(0, 5);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-foreground hover:text-accent transition-colors">
              The Corporate Blog
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-accent after:transition-all"
                >
                  {cat.name}
                </Link>
              ))}
              <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <DarkModeToggle />

              <div className="hidden md:flex items-center gap-3">
                {user ? (
                  <>
                    <Link
                      to="/profile"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <UserCircle size={16} /> Profile
                    </Link>
                    <Link
                      to="/admin"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      CMS
                    </Link>
                    <button
                      onClick={signOut}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <LogOut size={14} /> Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    to="/auth"
                    className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Sign In
                  </Link>
                )}
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-foreground p-1"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <nav className="lg:hidden pb-4 border-t border-border pt-4 animate-fade-in">
              {navCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <div className="pt-3 mt-3 border-t border-border">
                {user ? (
                  <button onClick={() => { signOut(); setMobileOpen(false); }} className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                    Sign Out
                  </button>
                ) : (
                  <Link to="/auth" onClick={() => setMobileOpen(false)} className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                    Sign In
                  </Link>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default BlogHeader;
