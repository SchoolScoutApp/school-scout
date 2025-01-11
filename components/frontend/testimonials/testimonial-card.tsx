import Image, { StaticImageData } from "next/image";
import {
  Twitter,
  Instagram,
  Youtube,
  TwitterIcon as TikTok,
} from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string | StaticImageData;
  platform: "twitter" | "instagram" | "youtube" | "tiktok";
}

const PlatformIcon = {
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  tiktok: TikTok,
};

export function TestimonialCard({
  name,
  role,
  content,
  avatar,
  platform,
}: TestimonialCardProps) {
  const Icon = PlatformIcon[platform];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <p className="text-base text-neutral-900">{content}</p>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src={avatar} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-medium text-neutral-900">{name}</h3>
            <p className="text-sm text-neutral-600">{role}</p>
          </div>
        </div>
        <Icon className="h-5 w-5 text-neutral-400" />
      </div>
    </div>
  );
}
