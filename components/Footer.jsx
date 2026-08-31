import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-line py-[25px] text-[#687284] text-[0.7rem]">
      <Container className="flex justify-between max-[620px]:flex-col max-[620px]:gap-2">
        <span>© 2026 Thauan.dev</span>
        <span>Sites • Landing Pages • Web</span>
      </Container>
    </footer>
  );
}
