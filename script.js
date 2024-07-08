// Function to calculate qoc
function calculateQoc(kh, ho, L, rw, rho_o_minus_rho_g, rho_w_minus_rho_o, mu_o, Bo, A) {
    // Calculate the numerator for qoc
    const numerator_qoc =
        Math.pow(kh, 0.68614) * Math.pow(ho, 1.4733) * Math.pow(L, 0.68116) * Math.pow(rw, 0.22896);

    // Calculate the denominator for qoc
    const denominator_qoc =
        Math.pow(rho_o_minus_rho_g, 0.099013) *
        Math.pow(rho_w_minus_rho_o, 0.4064) *
        Math.pow(mu_o, 0.97761) *
        Math.pow(Bo, 1.222) *
        Math.pow(A, 0.11929);

    // Calculate qoc
    const qoc = 7.0456e-4 * (numerator_qoc / denominator_qoc);

    return qoc;
}

// Function to calculate h_opt
function calculateHOpt(kh, ho, L, rw, rho_o_minus_rho_g, rho_w_minus_rho_o, mu_o, Bo, A) {
    // Calculate the numerator for h_opt
    const numerator_h_opt =
        Math.pow(ho, 1.0456) *
        Math.pow(rho_w_minus_rho_o, 0.034337) *
        Math.pow(Bo, 0.076578) *
        Math.pow(mu_o, 0.093349) *
        Math.pow(rw, 0.30437);

    // Calculate the denominator for h_opt
    const denominator_h_opt =
        Math.pow(kh, 0.0049087) *
        Math.pow(rho_o_minus_rho_g, 0.42956) *
        Math.pow(A, 0.011023) *
        Math.pow(L, 0.11661);

    // Calculate h_opt
    const h_opt = 8.8066 * (numerator_h_opt / denominator_h_opt);

    return h_opt;
}

function calculateResults() {
    // Get input values
    const kh = parseFloat(document.getElementById('kh').value);
    const ho = parseFloat(document.getElementById('ho').value);
    const L = parseFloat(document.getElementById('L').value);
    const rw = parseFloat(document.getElementById('rw').value);
    const rho_o_minus_rho_g = parseFloat(document.getElementById('rho_o_minus_rho_g').value);
    const rho_w_minus_rho_o = parseFloat(document.getElementById('rho_w_minus_rho_o').value);
    const mu_o = parseFloat(document.getElementById('mu_o').value);
    const Bo = parseFloat(document.getElementById('Bo').value);
    const A = parseFloat(document.getElementById('A').value);

    // Calculate both qoc and h_opt
    const qocValue = calculateQoc(kh, ho, L, rw, rho_o_minus_rho_g, rho_w_minus_rho_o, mu_o, Bo, A);
    const hOptValue = calculateHOpt(
        kh,
        ho,
        L,
        rw,
        rho_o_minus_rho_g,
        rho_w_minus_rho_o,
        mu_o,
        Bo,
        A
    );

    // Output the results
    document.getElementById('qocResult').textContent = `qoc: ${qocValue}`;
    document.getElementById('hOptResult').textContent = `h_opt: ${hOptValue}`;
}
