import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center w-full bg-transparent text-slate-800">
      <Spinner />
    </div>
  );
}
