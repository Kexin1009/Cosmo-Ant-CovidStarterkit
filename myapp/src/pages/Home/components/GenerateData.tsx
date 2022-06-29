export async function getProvincesInCountry() {
  try {
    // 👇️ const response: Response
    const response = await fetch('http://127.0.0.1:8000/edges/PROVINCE_IN_COUNTRY', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export async function getInfectedBy(){
  const response = await fetch('http://127.0.0.1:8000/edges/INFECTED_BY', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const result = await response.json();
    return result;
}

export async function getPatientTraveled() {
  const response = await fetch('http://127.0.0.1:8000/edges/PATIENT_TRAVELED', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const result = await response.json();
  return result;
}

export async function getBirthStamp() {
  const response = await fetch('http://127.0.0.1:8000/edges/BIRTH_STAMP', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const result = await response.json();
  return result;
}


export async function getAllEdgeTypes(){
  const response = await fetch('http://127.0.0.1:8000/edges/EdgeTypes', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const result = await response.json();
    return result;
}







