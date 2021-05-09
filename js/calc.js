function calculate(TH, lvl1, lvl2, lvl3, lvl4, lvl5, lvl6, lvl7, lvl8, lvl9, lvl10, lvl11, lvl12, lvl13) {
    var totalCost;
    if (TH == 1) {
        totalCost = 1000 * lvl1;
        return totalCost;
    } else if (TH == 2) {
        totalCost = 6000 * lvl1;
        totalCost = totalCost + 5000 * lvl2;
        return totalCost;
    } else if (TH == 3) {
        totalCost = 16000 * lvl1;
        totalCost = totalCost + 15000 * lvl2;
        totalCost = totalCost + 10000 * lvl3;
        return totalCost;
    } else if (TH == 4) {
        totalCost = 36000 * lvl1;
        totalCost = totalCost + 35000 * lvl2;
        totalCost = totalCost + 30000 * lvl3;
        totalCost = totalCost + 20000 * lvl4;
        return totalCost;
    } else if (TH == 5) {
        totalCost = 76000 * lvl1;
        totalCost = totalCost + 75000 * lvl2;
        totalCost = totalCost + 70000 * lvl3;
        totalCost = totalCost + 60000 * lvl4;
        totalCost = totalCost + 40000 * lvl5;
        return totalCost;
    } else if (TH == 6) {
        totalCost = 156000 * lvl1;
        totalCost = totalCost + 155000 * lvl2;
        totalCost = totalCost + 150000 * lvl3;
        totalCost = totalCost + 140000 * lvl4;
        totalCost = totalCost + 120000 * lvl5;
        totalCost = totalCost + 80000 * lvl6;
        return totalCost;
    } else if (TH == 7) {
        totalCost = 306000 * lvl1;
        totalCost = totalCost + 305000 * lvl2;
        totalCost = totalCost + 300000 * lvl3;
        totalCost = totalCost + 290000 * lvl4;
        totalCost = totalCost + 270000 * lvl5;
        totalCost = totalCost + 230000 * lvl6;
        totalCost = totalCost + 150000 * lvl7;
        return totalCost;
    } else if (TH == 8) {
        totalCost = 556000 * lvl1;
        totalCost = totalCost + 555000 * lvl2;
        totalCost = totalCost + 550000 * lvl3;
        totalCost = totalCost + 540000 * lvl4;
        totalCost = totalCost + 520000 * lvl5;
        totalCost = totalCost + 480000 * lvl6;
        totalCost = totalCost + 400000 * lvl7;
        totalCost = totalCost + 250000 * lvl8;
        return totalCost;
    } else if (TH == 9) {
        totalCost = 1056000 * lvl1;
        totalCost = totalCost + 1055000 * lvl2;
        totalCost = totalCost + 1050000 * lvl3;
        totalCost = totalCost + 1040000 * lvl4;
        totalCost = totalCost + 1020000 * lvl5;
        totalCost = totalCost + 980000 * lvl6;
        totalCost = totalCost + 900000 * lvl7;
        totalCost = totalCost + 750000 * lvl8;
        totalCost = totalCost + 500000 * lvl9;
        return totalCost;
    } else if (TH == 10) {
        totalCost = 2056000 * lvl1;
        totalCost = totalCost + 2055000 * lvl2;
        totalCost = totalCost + 2050000 * lvl3;
        totalCost = totalCost + 2040000 * lvl4;
        totalCost = totalCost + 2020000 * lvl5;
        totalCost = totalCost + 1980000 * lvl6;
        totalCost = totalCost + 1720000 * lvl7;
        totalCost = totalCost + 1570000 * lvl8;
        totalCost = totalCost + 1320000 * lvl9;
        totalCost = totalCost + 1000000 * lvl10;
        return totalCost;
    } else if (TH == 11) {
        totalCost = 4056000 * lvl1;
        totalCost = totalCost + 4055000 * lvl2;
        totalCost = totalCost + 4050000 * lvl3;
        totalCost = totalCost + 4040000 * lvl4;
        totalCost = totalCost + 4020000 * lvl5;
        totalCost = totalCost + 3980000 * lvl6;
        totalCost = totalCost + 3720000 * lvl7;
        totalCost = totalCost + 3570000 * lvl8;
        totalCost = totalCost + 3320000 * lvl9;
        totalCost = totalCost + 3000000 * lvl10;
        totalCost = totalCost + 2000000 * lvl11;
        totalCost = str(totalCost)
        totalLabel.config(text = "Cost: " + totalCost + " Gold")
        return totalCost;
    } else if (TH == 12) {
        totalCost = 8056000 * lvl1;
        totalCost = totalCost + 8055000 * lvl2;
        totalCost = totalCost + 8050000 * lvl3;
        totalCost = totalCost + 8040000 * lvl4;
        totalCost = totalCost + 8020000 * lvl5;
        totalCost = totalCost + 7980000 * lvl6;
        totalCost = totalCost + 7720000 * lvl7;
        totalCost = totalCost + 7570000 * lvl8;
        totalCost = totalCost + 7320000 * lvl9;
        totalCost = totalCost + 7000000 * lvl10;
        totalCost = totalCost + 6000000 * lvl11;
        totalCost = totalCost + 4000000 * lvl12;
        return totalCost;
    } else if (TH == 13) {
        totalCost = 14056000 * lvl1;
        totalCost = totalCost + 14055000 * lvl2;
        totalCost = totalCost + 14050000 * lvl3;
        totalCost = totalCost + 14040000 * lvl4;
        totalCost = totalCost + 14020000 * lvl5;
        totalCost = totalCost + 13980000 * lvl6;
        totalCost = totalCost + 13720000 * lvl7;
        totalCost = totalCost + 13570000 * lvl8;
        totalCost = totalCost + 13320000 * lvl9;
        totalCost = totalCost + 13000000 * lvl10;
        totalCost = totalCost + 12000000 * lvl11;
        totalCost = totalCost + 10000000 * lvl12;
        totalCost = totalCost + 6000000 * lvl13;
        return totalCost;
    }
}
function calc() {
    TH = document.getElementById("TH").value;
    lvl1 = document.getElementById("lvl1").value;
    lvl2 = document.getElementById("lvl2").value;
    lvl3 = document.getElementById("lvl3").value;
    lvl4 = document.getElementById("lvl4").value;
    lvl5 = document.getElementById("lvl5").value;
    lvl6 = document.getElementById("lvl6").value;
    lvl7 = document.getElementById("lvl7").value;
    lvl8 = document.getElementById("lvl8").value;
    lvl9 = document.getElementById("lvl9").value;
    lvl10 = document.getElementById("lvl10").value;
    lvl11 = document.getElementById("lvl11").value;
    lvl12 = document.getElementById("lvl12").value;
    lvl13 = document.getElementById("lvl13").value;
    if (TH == "" || lvl1 == "" || lvl2 == "" || lvl3 == "" || lvl4 == "" || lvl5 == "" || lvl6 == "" || lvl7 == "" || lvl8 == "" || lvl9 == "" || lvl10 == "" || lvl11 == "" || lvl12 == "" || lvl13 == "") {
        return alert("Please check that all values are assigned properly.");
    }
    document.getElementById("totalCost").innerHTML = calculate(TH, lvl1, lvl2, lvl3, lvl4, lvl5, lvl6, lvl7, lvl8, lvl9, lvl10, lvl11, lvl12, lvl13);
    return;
}