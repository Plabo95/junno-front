import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const myNewTheme = extendTheme({
    colors: {
        primary:"#005E2A",
        green: {
          50: '#f7fafc',
          500: "#005E2A",
          900: '#171923',
        },
    },

    fonts: {
      body: "Barlow, sans-serif",
      heading: "Barlow, serif",
      mono: "Barlow, monospace",
    },

    textStyles: {
      h1: {
        // you can also use responsive styles
        fontSize: ['48px', '72px'],
        fontWeight: 'bold',
        lineHeight: '110%',
        letterSpacing: '-2%',
      },
      h2: {
        fontSize: ['32px', '48px'],
        fontWeight: '500',
        color: "#005E2A",
        lineHeight: '110%',
        letterSpacing: '-1%',
      },
    },

  }
)