 function Language(){


const translations = {
    en: {
      title: "Welcome",
      description: "This is a sample website."
    },
    es:{
      title: " होम ",
      description: "कार्रवाई",
      contact:"संपर्क"
    },
    fr: {
      title: "Bienvenue",
      description: "Ceci est un site Web d'exemple."
    }
  };

  const select = document.getElementById('language-select');
  const title = document.getElementById('title');
  const description = document.getElementById('description');

  select.addEventListener('change', () => {
    const lang = select.value;
    title.textContent = translations[lang].title;
    description.textContent = translations[lang].description;
  });
}



export default Language