const generateTeamCards = team => {
    const genManager = manager => {
        return`
        <div class="card m-2" style="width: 18rem;">
        <div class="card-header h3">
         ${manager.getName()} - ${manager.getRole()}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
        </ul>
      </div>
      `;
    };
    const genEngineer = engineer => {
        return`
        <div class="card m-2" style="width: 18rem;">
        <div class="card-header h3">
         ${engineer.getName()} - ${engineer.getRole()}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
      </div>
      `;
    };
      const genIntern = intern => {
        return`
        <div class="card m-2" style="width: 18rem;">
        <div class="card-header h3">
         ${intern.getName()}  - ${intern.getRole()}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
      `;
    };

    const cards =[];

    cards.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => genManager(manager))
        );
     cards.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => genEngineer(engineer))
        );
     cards.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => genIntern(intern))
        );

    return cards.join("");
}

module.exports = team =>{

return`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dev Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 heading mb-3 bg-danger">
                <h1 class="text-center m-5">Dev Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="d-flex justify-content-center row col-12 team-card-area">
                ${generateTeamCards(team)}
            </div>
        </div>
    </div>
</body>

</html>
`
}

