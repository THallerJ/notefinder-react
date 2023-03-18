type SettingTitleProp = {
  children: string;
};

const SettingTitle = ({ children }: SettingTitleProp) => {
  return (
    <div>
      <span className="text-xs font-light uppercase text-[#d1d1d1]">
        {children}
      </span>
      <div className="mt-2 grow border-t border-[#1c1c1e]" />
    </div>
  );
};

export default SettingTitle;
