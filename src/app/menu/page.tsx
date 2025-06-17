import MenuItem from "@/components/MenuItem";
import { sampleMenu } from "@/lib/sampleMenu";

export default function MenuPage() {
  return (
    <section className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      {sampleMenu.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </section>
  );
}
