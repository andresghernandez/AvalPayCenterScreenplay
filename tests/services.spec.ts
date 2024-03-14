import { expect, test } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { Get } from '@testla/screenplay-playwright/api/actions/Get';
import { Post } from '@testla/screenplay-playwright/api/actions/Post';
import { Put } from '@testla/screenplay-playwright/api/actions/Put';
import { UseAPI } from '@testla/screenplay-playwright/api/abilities/UseAPI';
import { Delete } from '@testla/screenplay-playwright/api/actions/Delete';
import { Patch } from '@testla/screenplay-playwright/api/actions/Patch';

test('Services Get ReqRes', async ({ request }) => {
    const actor = Actor.named('actor')
    .can(UseAPI.using(request));

    const response = await actor.attemptsTo(
        Get.from("https://reqres.in/api/users")
    );
    console.log(response.status)
    expect(response.status).toBe(200);
    console.log(response.body)
    expect(response.body).not.toBeNull();
});

test('Services Post ReqRes', async ({ request }) => {
    const actor = Actor.named('actor')
    .can(UseAPI.using(request));

    const data = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    };

    const response = await actor.attemptsTo(
        Post.to("https://reqres.in/api/login").withData(data).withHeaders({
            'Content-type': 'application/json; charset=UTF-8',
        }),
    );
    console.log(response.status)
    expect(response.status).toBe(200);
    console.log(response.body)
    expect(response.body).not.toBeNull();
});

test('Services Put ReqRes', async ({ request }) => {
    const actor = Actor.named('actor')
    .can(UseAPI.using(request));

    const data = {
        "name": "morpheus",
        "job": "zion resident"
    };

    const response = await actor.attemptsTo(
        Put.to("https://reqres.in/api/users/3").withData(data)
    );
    console.log(response.status)
    expect(response.status).toBe(200);
    console.log(response.body)
    expect(response.body.name).toBe("morpheus");
});

test('Services Patch ReqRes', async ({ request }) => {
    const actor = Actor.named('actor')
    .can(UseAPI.using(request));

    const data = {
        "name": "morpheus",
        "job": "zion resident"
    };

    const response = await actor.attemptsTo(
        Patch.to("https://reqres.in/api/users/4").withData(data).withHeaders({
            'Content-type': 'application/json; charset=UTF-8',
        }),
    );
    console.log(response.status)
    expect(response.status).toBe(200);
    console.log(response.body)
    expect(response.body.job).toBe("zion resident");
});


test('Services Delete ReqRes', async ({ request }) => {
    const actor = Actor.named('actor')
    .can(UseAPI.using(request));

    const response = await actor.attemptsTo(
        Delete.from('https://jsonplaceholder.typicode.com/posts/1'),
    );
    expect(response.status).toBe(200);
    console.log(response.status)
    expect(response.body).toStrictEqual({});
    console.log(response.body)

});