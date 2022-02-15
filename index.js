document.addEventListener("DOMContentLoaded", function () {
    var waterVolumeOldField = document.getElementById("water_volume_old_field");
    var waterVolumeNewField = document.getElementById("water_volume_new_field");
    var waterTariffField = document.getElementById("water_tariff_field");
    var energyVolumeOldField = document.getElementById("energy_volume_old_field");
    var energyVolumeNewField = document.getElementById("energy_volume_new_field");
    var energyTariffField = document.getElementById("energy_tariff_field");
    var sumValueLabel = document.getElementById("sum_value_label");

    let func = function () {
        let sum = (waterVolumeNewField.value - waterVolumeOldField.value) * waterTariffField.value + (energyVolumeNewField.value - energyVolumeOldField.value) * energyTariffField.value;
        sumValueLabel.textContent = `${sum.toFixed(1)}`;
    };

    waterVolumeOldField.oninput = func;
    waterVolumeNewField.oninput = func;
    waterTariffField.oninput = func;
    energyVolumeOldField.oninput = func;
    energyVolumeNewField.oninput = func;
    energyTariffField.oninput = func;
});