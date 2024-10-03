import React from 'react';

interface ThemeContextProps {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = React.useState<boolean>(true);

  const providerInterface = React.useMemo(
    () => ({
      isDarkTheme,
      setIsDarkTheme
    }),
    [isDarkTheme]
  );

  React.useEffect(() => {
    document.documentElement.setAttribute(
      'data-color-scheme',
      isDarkTheme ? 'dark' : 'light'
    );
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={providerInterface}>{children}</ThemeContext.Provider>
  );
}
