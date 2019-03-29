import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { RecipeService } from "./../../shared/recipe.service";
import { Recipe } from "./../recipe-list/recipe-item/recipe.model";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  isEdit = false;
  recipeId = null;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {
    const urlReg = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";
    this.recipeForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      imagePath: new FormControl(null, [
        Validators.required,
        Validators.pattern(urlReg)
      ]),
      description: new FormControl(null, [Validators.required]),
      ingredients: new FormArray([], [Validators.required])
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isEdit = params.id ? true : false;
      this.recipeId = params.id;
      const recipe = this.recipeService.getRecipe(this.recipeId);
      this.recipeForm.setValue({
        name: recipe.name,
        description: recipe.description,
        imagePath: recipe.imagePath,
        ingredients: []
      });

      for (let ingredient of recipe.ingredients) {
        (this.recipeForm.get("ingredients") as FormArray).push(
          new FormGroup({
            name: new FormControl(ingredient.name),
            amount: new FormControl(ingredient.amount)
          })
        );
      }
    });
  }
  onSubmit() {
    console.log(this.recipeForm);
    const recipe = new Recipe(
      this.recipeForm.get("name").value,
      this.recipeForm.get("description").value,
      this.recipeForm.get("imagePath").value,
      this.recipeForm.get("ingredients").value
    );
    if (this.isEdit) {
      this.recipeService.updateRecipe(this.recipeId, recipe);
    } else {
      this.recipeId = this.recipeService.addRecipe(recipe);
    }
    this.recipeForm.reset();
    this.router.navigate([`/recipes/${this.recipeId}`]);
  }
  cancelAddEdit() {
    this.recipeForm.reset();
    if (this.isEdit) {
      this.router.navigate([`/recipes/${this.recipeId}`]);
    }
  }
  addIngredient() {
    (this.recipeForm.get("ingredients") as FormArray).push(
      new FormGroup({
        name: new FormControl(null, [Validators.required]),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern("^[1-9]+[0-9]*$")
        ])
      })
    );
  }
  get ingredientForm() {
    return <FormArray>this.recipeForm.get("ingredients");
  }
  deleteIngredient(id: number) {
    (this.recipeForm.get("ingredients") as FormArray).removeAt(id);
  }
}
