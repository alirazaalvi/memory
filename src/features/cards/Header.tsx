export interface OwnProps {
  label: string;
}

export const Header = ({ label }: OwnProps) => (
  <div className="container text-center mt-2 mb-2" data-testid="header-section">
    <h1>{label}</h1>
  </div>
);

export default Header;
