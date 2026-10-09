/**
 * The same 16 lucide-react icons BD's Events feature curates for perk
 * cards, reused verbatim (per BD's own author: none of these are
 * BD-specific, and PoundSterling fits this site better than it does
 * theirs) rather than inventing a different set.
 */
import {
  Award,
  Banknote,
  Coins,
  DollarSign,
  FileText,
  Folder,
  Gift,
  GraduationCap,
  Laptop,
  Music,
  Phone,
  Plane,
  PoundSterling,
  Ticket,
  User,
  Users,
} from "lucide-react";

export const PERK_ICON_OPTIONS = [
  { value: "Users", label: "Users", icon: Users },
  { value: "User", label: "User", icon: User },
  { value: "GraduationCap", label: "Graduation Cap", icon: GraduationCap },
  { value: "Banknote", label: "Banknote", icon: Banknote },
  { value: "DollarSign", label: "Dollar Sign", icon: DollarSign },
  { value: "PoundSterling", label: "Pound Sterling", icon: PoundSterling },
  { value: "Coins", label: "Coins", icon: Coins },
  { value: "Ticket", label: "Ticket", icon: Ticket },
  { value: "Folder", label: "Folder", icon: Folder },
  { value: "FileText", label: "File Text", icon: FileText },
  { value: "Laptop", label: "Laptop", icon: Laptop },
  { value: "Phone", label: "Phone", icon: Phone },
  { value: "Music", label: "Music", icon: Music },
  { value: "Award", label: "Award", icon: Award },
  { value: "Plane", label: "Plane", icon: Plane },
  { value: "Gift", label: "Gift", icon: Gift },
];

export const DEFAULT_PERK_ICON = PERK_ICON_OPTIONS[0].value;

export const getPerkIcon = (value) =>
  PERK_ICON_OPTIONS.find((opt) => opt.value === value)?.icon ||
  PERK_ICON_OPTIONS[0].icon;
