export const ConflictType = ({ conflicts }: { conflicts: boolean }) =>
  conflicts ? <p className="text-[#d63e57] font-semibold">Conflict</p> : null;
