import { ChefHat } from "lucide-react";

const page = () => {
  return (
    <section className="fade">
      <div className="w-full text-primary flex-col min-h-[70vh] mx-auto flex items-center justify-center gap-3">
        <ChefHat size={65} />

        <p className="block text-center text-xs font-normal text-secondary-foreground">
          You are logged in as the admin. <br /> Navigate to different dashboard
          pages through the sidebar.
        </p>
      </div>
    </section>
  );
};
export default page;
