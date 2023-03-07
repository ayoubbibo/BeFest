import '../styles/BenResultList.css';
import * as React from 'react';
import BenevoleCard from './BenevoleCard';
import { randomAvatar } from './AvatarGenerator';

export default function BenResultList({results}) {
    
    return (
        <div className="ben-result-list">
            <div className="ben-result-list-header">
                <div className="ben-result-list-header-name">
                    Bénévole List
                </div>
            </div>
            <ul className="ben-result-list-body">
                {
                    results.map((result) => 
                        {
                            // generate a random avatar
                            const avatarUrl = randomAvatar();
                            return (
                                <BenevoleCard id={result.id} nom={result.firstname} prenom={result.lastname} avatar={avatarUrl}/>
                            )
                        }
                    )
                }
            </ul>
        </div>
    );
}


