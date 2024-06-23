/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',
      md: "769px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      borderWidth: {
        "1": "1px"
      },
      backgroundImage: {
        "header": "url('/public/images/Header/headerBackgroundPicture.webp')"
      },
      backgroundColor: {
        "navbar": "rgba(164, 164, 164, 0.6)"
      },
      fontFamily: {
        "dana": "Dana",
        "dana-medium": "Dana Medium",
        "dana-bold": "Dana DemiBold",
        "morabba": "Morabba Light",
        "morabba-medium": "Morabba Medium",
        "morabba-bold": "Morabba Bold",
      },
      screens: {
        "xs": "480px",
        "ipad": "992px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        }
      },
      animation: {
        profile: "profile 4s linear infinite",
      },
      keyframes: {
        profile: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        }
      },
      boxShadow: {
        'big': '0px 0px 50px 1px'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", '& > *')
      addVariant("child-hover", '& > *:hover')
    }
  ],
}