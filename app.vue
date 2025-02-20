<template>
  <div :class="themeClass"  class="text-white min-h-screen flex flex-col  ">
    <!-- Header -->
    <AppHeader />
        <!-- Bouton de changement de thème -->
    <div class="fixed bottom-4 left-4">
      <!-- Bouton pour changer de thème -->
      <button @click="toggleTheme" class="flex items-center px-4 py-2 bg-gray-500 text-white rounded-2xl">
        <span v-if="theme === 'light'">🌙</span>
        <span v-else-if="theme === 'dark'">🐍</span>
        <span v-else>☀️</span>
        <span class="ml-2">{{ buttonText }}</span>
      </button>

    </div>
    <!-- Main Content -->
    <section  class="text-gray-700 flex justify-center py-2 px-5">
      
      <div :class="themeSection" class="w-full max-w-4xl  shadow-lg rounded-lg p-10">
        <div class = "justify-center flex mb-10">
          <img
              class="w-32 h-32 rounded-3xl "
              src="@/assets/images/4375050_logo_python_icon.png"
              alt="GitHub Logo"
            />
        </div>
        <h1 class="text-3xl font-bold text-center ">Bonjour 👋</h1>
        <p class="text-lg text-center">
          Je suis un Data Analyst 📊 et Data Scientist 🤖 passionné par l'analyse des données et la création de modèles prédictifs. Avec un parcours en informatique 💻 et une spécialisation en data science 📈, j'aime transformer les données en insights pertinents pour aider les entreprises à prendre des décisions éclairées 🚀.
        </p>

        <!--
        <h2 class="text-2xl font-semibold text-center mt-8">🔧 Mes Compétences</h2>
        <ul class="list-disc ml-6 text-lg mt-4">
          <li>Analyse exploratoire des données (EDA) 🔍</li>
          <li>Modélisation statistique et machine learning 🧠</li>
          <li>Visualisation des données (Matplotlib, Seaborn, Tableau) 📊</li>
          <li>Traitement de données volumineuses (Pandas, SQL) 💾</li>
          <li>Création de dashboards interactifs pour la prise de décision 📅</li>
        </ul>
        -->
        
        <h2 class="text-2xl font-semibold text-center mt-8">🚀 Projets</h2>
        <p class="text-lg text-center mt-4">Voici quelques projets récents sur lesquels j'ai travaillé :</p>
        <div  class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div :class = "themeDiv" class=" p-4 rounded-lg shadow-lg ">
            <h3 class="text-xl font-semibold">Prédiction des ventes 📈</h3>
            <p class="text-lg mt-2">J'ai développé un modèle de prédiction des ventes pour un réseau de magasins en utilisant des techniques de régression et des séries temporelles ⏳.</p>
            <p class="text-lg mt-2"> <a href="URL_DEMO" target="_blank" class="text-blue-500 hover:underline">Demo</a>    |    <a href="URL_REPO" target="_blank" class="text-blue-500 hover:underline">Repo</a></p>
            <div class="mt-2">
              <span class="inline-block bg-indigo-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-blue-600">Python</span>
              <span class="inline-block bg-orange-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-orange-600">TensorFlow</span>
              <span class="inline-block bg-green-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-teal-600">Séries Temporelles</span>
            </div>
          </div>
          <div :class = "themeDiv"  class=" p-4 rounded-lg shadow-lg ">
            <h3 class="text-xl font-semibold">Analyse des comportements clients 🛍️</h3>
            <p class="text-lg mt-2">Analyse des données clients pour déterminer les comportements d'achat et proposer des recommandations personnalisées à l'aide d'algorithmes de clustering 🔄.</p>
            <p class="text-lg mt-2"> <a href="URL_DEMO" target="_blank" class="text-blue-500 hover:underline">Demo</a>    |    <a href="URL_REPO" target="_blank" class="text-blue-500 hover:underline">Repo</a></p>
            <div class="mt-2">
              <span class="inline-block bg-indigo-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-blue-600">Python</span>
              <span class="inline-block bg-orange-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-orange-600">TensorFlow</span>
              <span class="inline-block bg-green-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-teal-600">Séries Temporelles</span>
            </div>
          </div>
          <div :class = "themeDiv"  class=" p-4 rounded-lg shadow-lg ">
            <h3 class="text-xl font-semibold">Prédiction des ventes 📈</h3>
            <p class="text-lg mt-2">J'ai développé un modèle de prédiction des ventes pour un réseau de magasins en utilisant des techniques de régression et des séries temporelles ⏳.</p>
            <p class="text-lg mt-2"> <a href="URL_DEMO" target="_blank" class="text-blue-500 hover:underline">Demo</a>    |    <a href="URL_REPO" target="_blank" class="text-blue-500 hover:underline">Repo</a></p>
            <div class="mt-2">
              <span class="inline-block bg-indigo-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-blue-600">Python</span>
              <span class="inline-block bg-orange-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-orange-600">TensorFlow</span>
              <span class="inline-block bg-green-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-teal-600">Séries Temporelles</span>
            </div>
          </div>
          <div :class = "themeDiv"  class=" p-4 rounded-lg shadow-lg ">
            <h3 class="text-xl font-semibold">Analyse des comportements clients 🛍️</h3>
            <p class="text-lg mt-2">Analyse des données clients pour déterminer les comportements d'achat et proposer des recommandations personnalisées à l'aide d'algorithmes de clustering 🔄.</p>
            <p class="text-lg mt-2"> <a href="URL_DEMO" target="_blank" class="text-blue-500 hover:underline">Demo</a>    |    <a href="URL_REPO" target="_blank" class="text-blue-500 hover:underline">Repo</a></p>
            <div class="mt-2">
              <span class="inline-block bg-indigo-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-blue-600">Python</span>
              <span class="inline-block bg-orange-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-orange-600">TensorFlow</span>
              <span class="inline-block bg-green-400 text-white text-sm px-3 py-1 rounded-full mr-2 hover:bg-teal-600">Séries Temporelles</span>
            </div>
          </div>
        </div>
        <div :class = "themeDiv" class="w-full max-w-4xl shadow-lg rounded-lg mt-6 p-6">
        <h2 class="text-3xl font-bold text-center mb-4">Mes Skills 🛠️</h2>
        
        <!-- Front-End -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold">Front-End 🖥️</h3>
          <ul class="list-disc pl-6">
            <li>Vue.js , Nuxt.js </li>
            <li>Tailwind CSS </li>

          </ul>
        </div>

        <!-- Back-End -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold">Back-End ⚙️</h3>
          <ul class="list-disc pl-6">
            <li>Django , FastAPI </li>
          </ul>
        </div>

        <!-- Data Science / Machine Learning -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold">Data Science & Machine Learning 🧠</h3>
          <ul class="list-disc pl-6">
            <li>Pandas , NumPy </li>
            <li>Scikit-learn , TensorFlow , Keras </li>
            <li>PyTorch , XGBoost , LightGBM </li>
            <li>Classification, Régression linéaire et logistique , Réseaux neuronaux , Réseaux de neurones adversariaux génératifs </li>
          </ul>
        </div>

        <!-- Big Data & Cloud Computing -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold">Big Data & Cloud Computing ☁️</h3>
          <ul class="list-disc pl-6">
            <li>Apache Spark , Hadoop </li>
            <li>Amazon S3 , AWS EMR , AWS IAM </li>
          </ul>
        </div>

        <!-- ETL / Data Integration -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold">ETL & Data Integration 🔄</h3>
          <ul class="list-disc pl-6">
            <li>Talend </li>
          </ul>
        </div>

        <!-- Database Management -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold">Database Management 🗄️</h3>
          <ul class="list-disc pl-6">
            <li>MySQL ,  SQLite </li>
            <li>Création de schémas relationnels </li>
          </ul>
        </div>

        <!-- Data Visualization -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold">Data Visualization 🎨</h3>
          <ul class="list-disc pl-6">
            <li>Power BI </li>
            <li>Matplotlib , Seaborn </li>
            <li>Grafana </li>
          </ul>
        </div>

        <!-- Version Control & CI/CD -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold">Version Control & CI/CD ⚙️</h3>
          <ul class="list-disc pl-6">
            <li>Git , GitHub </li>
            <li>MLFlow </li>
          </ul>
        </div>

        <!-- Automation / Scripting -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold">Automation & Scripting 🔧</h3>
          <ul class="list-disc pl-6">
            <li>Cron Jobs 🕰️, Rundeck 🛠️</li>
          </ul>
        </div>

        <!-- Soft Skills -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold">Soft Skills 🌟</h3>
          <ul class="list-disc pl-6">
            <li>Communication & Collaboration </li>
            <li>Gestion du temps & Priorisation </li>
            <li>Esprit critique & Résolution de problèmes </li>
            <li>Leadership & Mentorat </li>
          </ul>
        </div>
      </div>
        <h2 class="text-2xl font-semibold text-center mt-8">💡 Mon Processus de Travail</h2>
        <p class="text-lg text-center mt-4">
          Mon approche repose sur une compréhension approfondie des besoins métier 💼 et une analyse rigoureuse des données 🔬. J'utilise des outils modernes pour extraire, analyser et visualiser les données de manière claire et concise 📊. Mon objectif est toujours de fournir des résultats exploitables pour aider à la prise de décision 📝.
        </p>

        <h2 class="text-2xl font-semibold text-center mt-8">📬 Contact</h2>
        <p class="text-lg text-center mt-4">
          Si vous souhaitez discuter de collaborations, de projets ou d'opportunités, n'hésitez pas à me contacter 📱.
        </p>
        <div class="flex justify-center mt-4">
          <a href="https://www.linkedin.com/in/votre-nom" class="text-blue-500 hover:text-blue-700 mx-4">Medium 📜</a>
          <a href="https://www.linkedin.com/in/votre-nom" class="text-blue-500 hover:text-blue-700 mx-4">Kaggle 🏅</a>
          <a href="https://github.com/votre-nom" class="text-blue-500 hover:text-blue-700 mx-4">GitHub 🌐 </a>
        </div>
      </div>
    </section>



    <!-- Footer -->

    <AppFooter />
  </div>
</template>




<script>
export default {
  data() {
    return {
      theme: 'light', // Valeur initiale
      themeClass: 'bg-slate-200 text-black', // Classe Tailwind 
      themeSection: 'bg-slate-100 text-black' ,
      themeDiv: 'bg-white text-black' ,
      buttonText: 'Thème sombre', // Texte initial du bouton
    };
  },
  methods: {
    toggleTheme() {
      if (this.theme === 'light') {
        this.theme = 'dark';
        this.themeClass = 'bg-neutral-800 text-white'; // Classes pour mode sombre
        this.themeSection = 'bg-neutral-700 text-white' ;
        this.themeDiv =  'bg-neutral-600 text-white' ;
        this.buttonText = 'Thème Python';
      } else if (this.theme === 'dark') {
        this.theme = 'python';
        this.themeClass = 'bg-blue-500 text-blue-950'; // Fond principal très clair, texte bleu foncé
        this.themeSection = 'bg-blue-200 text-blue-950'; // Un jaune un peu plus marqué pour la section
        this.themeDiv = 'bg-yellow-300 text-blue-950'; // Fond bleu ultra clair pour bien distinguer les blocs internes
        this.buttonText = 'Thème clair';

      } else {
        this.theme = 'light';
        this.themeClass = 'bg-slate-200 text-black'; // Classes pour mode clair
        this.themeSection = 'bg-slate-100 text-black' ;
        this.themeDiv = 'bg-white text-black' ;
        this.buttonText = 'Thème sombre';
      }
    },
  },
};
</script>

<!-- 
<style scoped>
.light {
  --s: 140px; /* control the size */
  --c1: #a7f3d0;
  --c2: #34d399;

  --_g: #0000 25%, #0008 47%, var(--c1) 53% 147%, var(--c2) 153% 247%,
    var(--c1) 253% 347%, var(--c2) 353% 447%, var(--c1) 453% 547%, #0008 553%,
    #0000 575%;
  --_s: calc(25% / 3) calc(25% / 4) at 50%;
  background: radial-gradient(var(--_s) 100%, var(--_g)),
    radial-gradient(var(--_s) 100%, var(--_g)) calc(var(--s) / 2)
      calc(3 * var(--s) / 4),
    radial-gradient(var(--_s) 0, var(--_g)) calc(var(--s) / 2) 0,
    radial-gradient(var(--_s) 0, var(--_g)) 0 calc(3 * var(--s) / 4),
    repeating-linear-gradient(
      90deg,
      #accec0 calc(25% / -6) calc(25% / 6),
      #7dd3fc 0 calc(25% / 2)
    );
  background-size: var(--s) calc(3 * var(--s) / 2);
  animation: m infinite linear;
  animation-duration: 45s; /* Valeur par défaut */
  transition: animation-duration 0.3s ease-in-out; /* Transition douce pour l'animation */
}

.python {
  --s: 140px; /* control the size */
  --c1: #ffde57;
  --c2: #4584b6;

  --_g: #0000 25%, #0008 47%, var(--c1) 53% 147%, var(--c2) 153% 247%,
    var(--c1) 253% 347%, var(--c2) 353% 447%, var(--c1) 453% 547%, #0008 553%,
    #0000 575%;
  --_s: calc(25% / 3) calc(25% / 4) at 50%;
  background: radial-gradient(var(--_s) 100%, var(--_g)),
    radial-gradient(var(--_s) 100%, var(--_g)) calc(var(--s) / 2)
      calc(3 * var(--s) / 4),
    radial-gradient(var(--_s) 0, var(--_g)) calc(var(--s) / 2) 0,
    radial-gradient(var(--_s) 0, var(--_g)) 0 calc(3 * var(--s) / 4),
    repeating-linear-gradient(
      90deg,
      #646464 calc(25% / -6) calc(25% / 6),
      #929292 0 calc(25% / 2)
    );
  background-size: var(--s) calc(3 * var(--s) / 2);
  animation: m infinite linear;
  animation-duration: 45s; /* Valeur par défaut */
  transition: animation-duration 0.3s ease-in-out; /* Transition douce pour l'animation */
}


.dark {
  --s: 140px; /* control the size */
  --c1: #000000;
  --c2: #333333;

  --_g: #0000 25%, #0008 47%, var(--c1) 53% 147%, var(--c2) 153% 247%,
    var(--c1) 253% 347%, var(--c2) 353% 447%, var(--c1) 453% 547%, #0008 553%,
    #0000 575%;
  --_s: calc(25% / 3) calc(25% / 4) at 50%;
  background: radial-gradient(var(--_s) 100%, var(--_g)),
    radial-gradient(var(--_s) 100%, var(--_g)) calc(var(--s) / 2)
      calc(3 * var(--s) / 4),
    radial-gradient(var(--_s) 0, var(--_g)) calc(var(--s) / 2) 0,
    radial-gradient(var(--_s) 0, var(--_g)) 0 calc(3 * var(--s) / 4),
    repeating-linear-gradient(
      90deg,
      #646464 calc(25% / -6) calc(25% / 6),
      #929292 0 calc(25% / 2)
    );
  background-size: var(--s) calc(3 * var(--s) / 2);
  animation: m infinite linear;
  animation-duration: 45s; /* Valeur par défaut */
  transition: animation-duration 0.3s ease-in-out; /* Transition douce pour l'animation */
}

@keyframes m {
  to {
    background-position: var(--s) 0, calc(var(--s) / -2) calc(3 * var(--s) / 4),
      calc(3 * var(--s) / 2) 0, calc(-1 * var(--s)) calc(3 * var(--s) / 4), 0 0;
  }
}

html {
  scroll-behavior: smooth;
}

a {
  transition: color 0.3s ease;
}

a:hover {
  color: #ff6347;
}
</style>

-->