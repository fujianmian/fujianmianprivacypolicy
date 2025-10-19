import PrivacyPolicyContent from './components/PrivacyPolicyContent';

export const metadata = {
  title: "Periodable - Privacy Policy",
  description: "Privacy Policy for Periodable Period Tracking Application",
};

export const revalidate = false; // ISR disabled - pure static

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <PrivacyPolicyContent />
    </main>
  );
}