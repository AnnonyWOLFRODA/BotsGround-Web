function switchLanguage(lang) {
    if (lang === 'fr') {
        document.getElementById('construction-subtitle-fr').style.display = 'block';
        document.getElementById('construction-subtitle-en').style.display = 'none';
        document.getElementById('construction-text-fr').style.display = 'block';
        document.getElementById('construction-text-en').style.display = 'none';
        document.getElementById('discord-link-fr').style.display = 'block';
        document.getElementById('discord-link-en').style.display = 'none';
        document.querySelector('.language-switch a[onclick="switchLanguage(\'fr\')"]').classList.add('active');
        document.querySelector('.language-switch a[onclick="switchLanguage(\'en\')"]').classList.remove('active');
    } else if (lang === 'en') {
        document.getElementById('construction-subtitle-fr').style.display = 'none';
        document.getElementById('construction-subtitle-en').style.display = 'block';
        document.getElementById('construction-text-fr').style.display = 'none';
        document.getElementById('construction-text-en').style.display = 'block';
        document.getElementById('discord-link-fr').style.display = 'none';
        document.getElementById('discord-link-en').style.display = 'block';
        document.querySelector('.language-switch a[onclick="switchLanguage(\'fr\')"]').classList.remove('active');
        document.querySelector('.language-switch a[onclick="switchLanguage(\'en\')"]').classList.add('active');
    }
}