<h1>Hubspot Theme Builder</h1>
<h3>Plugin which is used in this folder</h3>
<ul>
    <li>Tailwind css</li>
    <li>Tailwind Aspect Ration</li>
    <li>jQuery</li>
    <li>Slick Slider</li>
</ul>
<h3>What is things is available in this folder?</h3>
<u
    <li>
        Css
        <ul>
            <li>
                Slick slider css
            </li>
            <li>
                Slick theme css
            </li>
        </ul>
    </li>
    <li>
            js
            <ul>
                <li>
                    Smooth scroll js
                </li>
                <li>
                    FAQ accordian js
                </li>
                <li>
                    FAQ accordian js
                </li>
                <li>
                    jQuery Slick Slider
                </li>
            </ul>
        </li>
</ul>
<h3>What to do next after download theme-builder?</h3>
<ul>
    <li>Change the folder name according your project.</li>
    <li>Change the name of "public" folder name according your project.</li>
    <li>you have to first delete old hubspot.config.yml file hit command hs init and generate hubspot.config.yml file ( and move in to gitignore folder )</li>
    <li>Change css and js according requirements.</li>
    <li>There are some modules there you can use as per your requirments.</li>
    <li>In templates/layouts/base.html => you just correct header/footer path</li>
    <li>In templates/partials/header.html|footer.html => you just correct header/footer module path</li>
</ul>
<h3>Usefull commands</h3>
<ul>
    <li> hs init </li>
    <li>hs uplaod hubspot_folder_name local_folder_name </li>
    <li>hs fetch hubspot_folder_name local_folder_name --overwrite </li>
</ul>
<h3>Suggestion</h3>
<ol>
    <li>
        While you are changing the folder name, don't forgot to copy files which is mentioned below from theme-builder folder.
        <ul>
            <li> css/theme_override.css | css/_macros.css </li>
            <li> whole module folder </li>
            <li> whole templates folder </li>
            <li> field.json | theme.json </li>
        </ul>  
    </li>
</ol>
