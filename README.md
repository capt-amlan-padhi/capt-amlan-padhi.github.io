# Dark/Light Mode Toggle with Image Change

This is a code snippet that demonstrates how to implement a dark/light mode toggle button with image change functionality using HTML, CSS, and JavaScript.

The code allows users to switch between dark and light modes on a webpage. Additionally, it changes the displayed images based on the selected mode. The toggle button uses icons to represent the modes: a moon icon for dark mode and a sun icon for light mode.

## Features

- Dark/light mode toggle functionality.
- Image change based on the selected mode.
- Smooth transition between modes with a ripple effect.
- Customizable icons and image paths.

## Usage

To use this code snippet, follow these steps:

1. Include the HTML markup provided in your web page, making sure to update the image paths and icon classes as necessary.
2. Add the provided CSS styles to your stylesheet or `<style>` tag.
3. Place the JavaScript code within a `<script>` tag or external JavaScript file and include it in your HTML file.
4. Update the image paths in the JavaScript code to match the actual paths of your dark and light mode images.
5. Customize the icons and their classes in the JavaScript code to fit your preferred icon library.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Head section content here -->
</head>
<body>
  <!-- Page content here -->

  <section class="home" id="home">
    <div class="home-image">
      <img id="homeImg" src="images/home-dark.png" alt="home-img">
    </div>
  </section>

  <section class="about" id="about">
    <div class="about-img">
      <img id="aboutImg" src="images/about-dark.png" alt="">
    </div>
  </section>

  <button id="toggle-theme-btn" class="toggle-btn">
    <i class="fas fa-moon"></i>
  </button>

  <script>
    const toggleBtn = document.getElementById('toggle-theme-btn');
    const body = document.querySelector('body');
    const homeImg = document.getElementById('homeImg');
    const aboutImg = document.getElementById('aboutImg');

    toggleBtn.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');

        if (isLightMode) {
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Replace with your sun icon
            homeImg.src = 'images/home-light.png';
            aboutImg.src = 'images/about-light.png';
        } else {
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Replace with your moon icon
            homeImg.src = 'images/home-dark.png';
            aboutImg.src = 'images/about-dark.png';
        }
    });
  </script>
</body>
</html>
```

## Customization

Feel free to customize the code to fit your specific requirements. You can modify the CSS styles to match your design preferences and update the JavaScript code to handle additional functionality if needed.

## Credits

This code snippet was created by [your name] and is provided under the [license](LICENSE.md).

## License

This project is licensed under the [MIT License](LICENSE.md).
