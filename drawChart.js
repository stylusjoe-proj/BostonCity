function drawChart(salaries) {
    let row = []
    salaries.forEach(item=>row.push([item[9],Number(item[18])]));
    let shortRows = row.slice(0,20);
    console.log(shortRows)

// Create the data table
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Job Title');
    data.addColumn('number', 'Salary');
    data.addRows(shortRows);

    // Set chart options
    var options = {'title':'Boston City Salaries:',
                'width':800,
                'height':500};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart'));
    chart.draw(data, options);
}