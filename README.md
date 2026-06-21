# 🚀 Prafulla Shinde - DevOps Portfolio Website

Welcome to my personal portfolio website repository!

This portfolio showcases my professional journey, technical expertise, projects, certifications, and hands-on experience in **DevOps, Cloud Computing, Infrastructure Automation, and Container Orchestration**.

The website serves as a central hub for recruiters, hiring managers, and fellow engineers to explore my skills, achievements, and contributions.

---

## 🌟 Features

* Professional portfolio and resume showcase
* Project highlights and technical implementations
* DevOps and Cloud skill demonstrations
* Responsive design for desktop and mobile devices
* Interactive animations powered by GSAP
* Fast and optimized user experience
* Hosted using GitHub Pages

---

## 🛠️ Technology Stack

### Cloud Platforms

* AWS
* Google Cloud Platform (GCP)

### DevOps & Automation

* Docker
* Kubernetes
* OpenShift
* Terraform
* Ansible
* Jenkins
* GitHub Actions

### Build & Version Control

* Git
* GitHub
* Maven

### Scripting & Operating Systems

* Shell Scripting
* Linux

### Frontend

* React
* TypeScript
* Vite
* GSAP

---

## 📸 Portfolio Preview

![Portfolio Preview](public/images/prafulla_preview.png)

---

## ⚠️ GSAP Club Plugin Notice

This project contains modified GSAP Club plugins for development and learning purposes.

Please note:

* GSAP trial plugins cannot be legally hosted in production environments.
* Before deploying publicly, replace trial plugins with licensed Club GreenSock plugins.

Official Installation Guide:

https://gsap.com/docs/v3/Installation/

---

# 🌐 Deploying to GitHub Pages

Follow the steps below to host your own version of this portfolio using GitHub Pages.

## Prerequisites

Ensure you have the following installed:

* Git
* Node.js
* npm
* GitHub Account

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/PrafullaS/prafulla-portfolio.git
cd prafulla-portfolio
```

---

## Step 2: Install Dependencies

```bash
npm install
```

---

## Step 3: Configure Vite

Update the `base` property inside `vite.config.ts`:

```ts
export default defineConfig({
  base: "/prafulla-portfolio/",
  plugins: [react()],
});
```

Replace `prafulla-portfolio` with your repository name if different.

---

## Step 4: Configure Homepage URL

Update the `homepage` field in `package.json`:

```json
{
  "homepage": "https://<github-username>.github.io/prafulla-portfolio/"
}
```

---

## Step 5: Deploy the Website

Run:

```bash
npm run deploy
```

This command will:

* Build the application
* Generate production artifacts
* Push the build output to the `gh-pages` branch

---

## Step 6: Enable GitHub Pages

Navigate to:

```text
Repository → Settings → Pages
```

Under **Source**:

* Select `Deploy from a branch`
* Choose `gh-pages`
* Click **Save**

---

## Step 7: Access Your Website

Your portfolio will be available at:

```text
https://<github-username>.github.io/prafulla-portfolio/
```

---

## 🔄 Future Updates

Whenever you make changes:

```bash
npm run deploy
```

The website will automatically be rebuilt and redeployed.

---

## 📬 Contact

Feel free to connect with me for:

* DevOps Opportunities
* Cloud Engineering Roles
* Infrastructure Automation Projects
* Open Source Collaborations

### Connect With Me

* LinkedIn
* GitHub
* Portfolio Website

(Add your links here)

---

## 📄 License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.

---

⭐ If you found this project useful, consider giving it a star on GitHub.
