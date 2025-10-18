import PrivacyPolicyContent from './components/PrivacyPolicyContent';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <PrivacyPolicyContent />
    </main>
  );
}