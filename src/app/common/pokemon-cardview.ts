import {  Component, Input } from '@angular/core'


@Component({
    selector: 'pokemon-card',
    template : `
        <div class="card-view">
            <div class="img-sec">
              <img src={{pokemon?.img}} height="150" width="150" />
            </div>
             <div class="info-sec">
               <p><b> Name:</b> <i>{{pokemon?.name}}</i></p>
               <p><b> Height:</b> {{pokemon.height}}</p>
               <p><b> Power Level:</b> {{pokemon.power_level}}</p>
             </div>
        </div>`
})
export class PokemonCardView{
    @Input() 
     pokemon: any;
}