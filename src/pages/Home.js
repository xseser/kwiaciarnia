import React from 'react';
import './styles/Home.css';

function Home() {
    return (
        <div className="home">
            <table className="opening-hours">
                <thead>
                <tr>
                    <th>Dzień tygodnia</th>
                    <th>Godziny otwarcia</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Poniedziałek</td>
                    <td>9:30 - 18:00</td>
                </tr>
                <tr>
                    <td>Wtorek</td>
                    <td>9:30 - 18:00</td>
                </tr>
                <tr>
                    <td>Środa</td>
                    <td>9:30 - 18:00</td>
                </tr>
                <tr>
                    <td>Czwartek</td>
                    <td>9:30 - 18:00</td>
                </tr>
                <tr>
                    <td>Piątek</td>
                    <td>9:30 - 18:00</td>
                </tr>
                <tr>
                    <td>Sobota</td>
                    <td>9:30 - 18:00</td>
                </tr>
                <tr>
                    <td>Niedziela</td>
                    <td>9:30 - 16:00</td>
                </tr>
                </tbody>
            </table>
            <p className="note">
                Kwiaciarnia, która nieprzerwanie działa przy ulicy Tumskiej w Płocku, to prawdziwa pasja właścicielki,
                która ma już ponad 75 lat. Dla niej kwiaciarnia to całe życie, a obok niej obecnie pracuje jej córka,
                kontynuując rodzinną tradycję.
            </p>
        </div>
    );
}

export default Home;
