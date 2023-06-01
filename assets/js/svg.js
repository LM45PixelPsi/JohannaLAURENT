const inclSVG = async (svgContainerId) => {
  const svgPath = `./assets/svg/${svgContainerId}.svg`;

  try {
    const response = await fetch(svgPath);
    const svgText = await response.text();

    const svgContainer = document.getElementById(svgContainerId);
    svgContainer.innerHTML = svgText;
  } catch (error) {
    console.error(`Error fetching SVG: ${error}`);
  }
};

inclSVG("uni");

// mettre dans la funct le nom du svg placer dans le dossier (s'assurer que la div à l'id correspondant au nom du svg
// ex :      <div class="svg-container" id="svgtest4"></div> )
